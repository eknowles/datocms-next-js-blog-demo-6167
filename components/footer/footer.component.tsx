import React from 'react';
import Link from 'next/link';
import Logo from '../logo';
import Container from '../container';
import Button from '../button';

const footerNavigationLinks = [
  { label: 'Accessibility', href: '/accessibility' },
  { label: 'Cookies', href: '/cookies' },
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms and Conditions', href: '/terms' },
];

const Footer: React.FC = () => {
  return (
    <footer
      className="bg-indigo-900"
      aria-label="Site copyright, privacy and accessibility information"
    >
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between py-6 text-white">
          <div className="w-48 md:w-24 mb-6 md:mb-0">
            <Logo />
          </div>
          <Button className="w-full md:w-auto">Donate</Button>
        </div>
      </Container>
      <hr className="border-indigo-800" />
      <Container>
        <div className="flex flex-col py-6 text-sm text-white md:flex-row md:justify-between md:items-center">
          <p className="text-xs text-gray-400 py-6 max-w-3xl">
            Whizz-Kidz is the working name of The Movement for Non-Mobile
            Children (Whizz-Kidz). Registered charity No. 802872. Company
            registered in England and Wales No. 2444520. Charity registered in
            Scotland No. SC042607
            <br />
            Copyright {new Date().getUTCFullYear()} All rights reserved.{' '}
            <a
              className="font-medium text-white"
              href="https://somoglobal.com/?utm_source=whizz_kidz&utm_medium=link&utm_campaign=whizz_kidz"
              target="_blank"
              rel="noreferrer"
            >
              Website by Somo
            </a>
            .
          </p>
          <nav aria-label="Website Policies">
            <ul className="flex flex-col md:flex-row">
              {footerNavigationLinks.map((nav) => (
                <li key={nav.href} className="md:ml-4">
                  <Link href={nav.href}>
                    <a className="block py-4 md:py-0 hover:underline whitespace-no-wrap">
                      {nav.label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
