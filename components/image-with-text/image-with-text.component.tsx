import { useReducedMotion } from 'framer-motion';
import React from 'react';
import cx from 'classnames';
import { Image } from 'react-datocms';
import { Parallax } from 'react-scroll-parallax';
import Container from '../container';
import Statement from '../statement';
import { IStatementProps } from '../statement/statement.component';
import Button from '../button';

export interface IImageWithTextProps extends IStatementProps {
  image?: any;
  transparentBackground?: boolean;
  imagePosition: 'left' | 'right';
  cta?: any;
}

const ImageWithText: React.FC<IImageWithTextProps> = ({
  image,
  heading,
  eyebrow,
  text,
  imagePosition = 'right',
  transparentBackground,
  cta,
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Container as="section">
      <div
        className={cx('grid items-center my-20 lg:my-40 lg:grid-cols-5', {
          'bg-gray-200': !transparentBackground,
        })}
      >
        <div
          className={cx('grid gap-8 p-8 lg:p-16 lg:row-start-1 lg:row-end-2', {
            'lg:col-start-3 lg:col-end-6': imagePosition === 'left',
            'lg:col-start-1 lg:col-end-4': imagePosition === 'right',
          })}
        >
          <Statement heading={heading} eyebrow={eyebrow} text={text} />
          {cta && cta.linkProps && cta.label && (
            <div>
              <Button linkProps={cta.linkProps} size="lg">
                {cta.label}
              </Button>
            </div>
          )}
        </div>
        {image && (
          <Parallax
            disabled={shouldReduceMotion}
            y={[10, -10]}
            x={[2, 0]}
            className={cx('lg:row-start-1 lg:row-end-2', {
              'lg:col-start-1 lg:col-end-3': imagePosition === 'left',
              'lg:col-start-4 lg:col-end-6': imagePosition === 'right',
            })}
          >
            <Image data={image.responsiveImage} />
          </Parallax>
        )}
      </div>
    </Container>
  );
};

export default ImageWithText;
