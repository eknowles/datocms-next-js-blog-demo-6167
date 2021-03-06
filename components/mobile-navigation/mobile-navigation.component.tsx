import { useButton } from '@react-aria/button';
import { OverlayContainer } from '@react-aria/overlays';
import { useOverlayTriggerState } from '@react-stately/overlays';
import cx from 'classnames';
import { AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import { brands } from '../../lib/brand-context';
import styles from '../full-page-sitemap/full-page-sitemap.module.css';
import ModalDialog from '../modal-dialog';

export interface INavChild {
  label: string;
  href: string;
}

export interface ILinkProps {
  href: string;
}

export interface INavItem {
  id: string;
  label: string;
  type: string;
  children: INavChild[];
  linkProps: ILinkProps;
  brand: string;
}

export interface IMobileNavigationProps {
  links: INavItem[];
}

const MobileNavigation: React.FC<IMobileNavigationProps> = ({ links }) => {
  const openButtonRef = React.useRef<HTMLButtonElement>();
  const closeButtonRef = React.useRef<HTMLButtonElement>();
  const state = useOverlayTriggerState({});

  // useButton ensures that focus management is handled correctly,
  // across all browsers. Focus is restored to the button once the
  // dialog closes.
  const { buttonProps: openButtonProps } = useButton(
    {
      onPress: () => state.open(),
    },
    openButtonRef
  );

  const { buttonProps: closeButtonProps } = useButton(
    {
      onPress: () => state.close(),
    },
    closeButtonRef
  );

  const closeButton = (
    <button
      type="button"
      className="p-3 text-gray-800 rounded-lg hover:bg-gray-200"
      ref={closeButtonRef}
      {...(closeButtonProps as any)}
    >
      <svg
        role="img"
        aria-label="Close Menu"
        focusable="false"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        className="w-8 h-8 stroke-current"
      >
        <path d="M18 6L6 18M6 6l12 12" />
      </svg>
    </button>
  );

  const openButton = (
    <button
      type="button"
      className="p-3 text-gray-800 rounded-lg hover:bg-gray-200 lg:hidden"
      ref={openButtonRef}
      {...(openButtonProps as any)}
    >
      <svg
        role="img"
        aria-label="Open Menu"
        focusable="false"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        className="w-8 h-8 stroke-current"
      >
        <path d="M3 12h18M3 6h18M3 18h18" />
      </svg>
    </button>
  );

  return (
    <>
      {openButton}
      <AnimatePresence>
        {state.isOpen && (
          <OverlayContainer>
            <ModalDialog
              title="Whizz-Kidz"
              isOpen
              onClose={state.close}
              isDismissable
              position="right-full"
              closeButton={closeButton}
            >
              <ul
                className="flex flex-col flex-1 h-full overflow-y-scroll text-white"
                aria-label="Navigation Category"
              >
                {links.map((link) => (
                  <li key={link.id} className="h-full">
                    <Link {...link.linkProps}>
                      <a
                        onClick={state.close}
                        className={cx(
                          'px-8 py-4 text-left text-2xl sm:text-3xl md:text-5xl font-bold flex items-center w-full hover:underline h-full block',
                          `${brands[link.brand || 'default'].backgroundColor}`,
                          styles.categoryButton
                        )}
                      >
                        <span className="px-4 py-3">{link.label}</span>
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </ModalDialog>
          </OverlayContainer>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNavigation;
