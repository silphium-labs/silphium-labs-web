import { createSignal, onMount, onCleanup, Component } from 'solid-js';

interface SkewImageProps {
    src?: string;
    alt?: string;
    maxSkewDegree?: number;
    transitionSpeed?: number;
    width?: number;
    height?: number;
    [key: string]: any;
}

const SkewImage: Component<SkewImageProps> = (props) => {
    const {
        src = props.src,
        alt = 'Skewable Image',
        maxSkewDegree = 10,
        transitionSpeed = 0.3,
        ...restProps
    } = props;

    const [skewX, setSkewX] = createSignal(0);
    const [skewY, setSkewY] = createSignal(0);
    const [isHovering, setIsHovering] = createSignal(false);

    let containerRef: HTMLDivElement | undefined;

    const handleMouseMove = (e: MouseEvent): void => {
        if (!containerRef) return;

        const rect = containerRef.getBoundingClientRect();

        const centerX = rect.left + (rect.width / 2);
        const centerY = rect.top + (rect.height / 2);

        const distanceX = (e.clientX - centerX) / (rect.width / 2);
        const distanceY = (e.clientY - centerY) / (rect.height / 2);

        setSkewX(distanceY * -maxSkewDegree);
        setSkewY(distanceX * -maxSkewDegree);
    };

    const handleMouseEnter = (): void => {
        setIsHovering(true);
    };

    const handleMouseLeave = (): void => {
        setIsHovering(false);

        setSkewX(0);
        setSkewY(0);
    };

    onMount(() => {
        if (containerRef) {
            containerRef.addEventListener('mousemove', handleMouseMove);
            containerRef.addEventListener('mouseenter', handleMouseEnter);
            containerRef.addEventListener('mouseleave', handleMouseLeave);
        }
    });

    onCleanup(() => {
        if (containerRef) {
            containerRef.removeEventListener('mousemove', handleMouseMove);
            containerRef.removeEventListener('mouseenter', handleMouseEnter);
            containerRef.removeEventListener('mouseleave', handleMouseLeave);
        }
    });

    return (
        <div
            ref={containerRef as any}
            style={{

                'display': 'flex',
                'justify-content': 'center',
                'align-items': 'center',
                'overflow': 'hidden',
                'position': 'relative',
                'cursor': 'pointer'
            }}
            {...restProps}
        >
            <img
                src={src}
                alt={alt}
                style={{
                    'width': '100%',
                    'height': '100%',
                    'object-fit': 'cover',
                    'transform': `skew(${skewY()}deg, ${skewX()}deg)`,
                    'transition': `transform ${transitionSpeed}s ease-out`,
                    'display': 'block'
                }}
            />
        </div>
    );
};

export default SkewImage;
