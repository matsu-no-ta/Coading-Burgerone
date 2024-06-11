const loading = () => {

    const loadingArea = document.querySelector('.js-loading');
    const loadingText = document.querySelector('.js-loading-text');

    if (!loadingArea || !loadingText) return;

    window.addEventListener('load', () => {
        loadingArea.animate(
            {
                backdropFilter: ['blur(5px)', 'blur(0)'],
                background: ['rgba(17, 54, 31, 1)', 'rgba(17, 54, 31, 0)'],
                visibility: 'hidden',
            },
            {
                duration: 1400,
                delay: 700,
                easing: 'ease',
                fill: 'forwards',
            }
        );

        loadingText.animate (
            [
                {
                    opacity: 1,
                    offset: .8,
                },
                {
                    opacity: 0,
                    offset: 1,
                },
            ],
            {
                duration: 700,
                easing: 'ease',
                fill: 'forwards',
            }
        );
    })};

loading();