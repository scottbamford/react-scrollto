﻿import * as React from 'react';

export interface ScrollToProps {
    shouldScrollTo?: boolean,
    delay?: number,
    children?: React.ReactNode,
}

/**
 * React component that can scroll to itself using scrollInView when its shouldScrollTo prop is true.
 * 
 * @param props
 */
export const ScrollTo = (props: ScrollToProps) => {
    const {
        shouldScrollTo = true,
        delay = 20,
        children,
    } = props;
    const scrollToRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        if (!shouldScrollTo) {
            return;
        }

        if (!scrollToRef.current) {
            return;
        }

        // Scroll into view after a short delay.
        setTimeout(() => {
            if (!scrollToRef.current) {
                return;
            }

            scrollToRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            });
        }, delay);
    }, [shouldScrollTo, delay]);

    return (
        <div ref={shouldScrollTo? scrollToRef: null} className={`scroll-to ${shouldScrollTo ? 'scroll-to-active' : ''}`}>
            {children}
        </div>
        );
};