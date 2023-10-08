import gallery1 from 'assets/image/farm-activity.jpg';
import gallery2 from 'assets/image/farm-activity-2.jpg';

import ScrollCarousel from 'scroll-carousel-react';

export function Gallery() {

    const gallerySources = [gallery1, gallery2, gallery1, gallery2];

    return(
        <section className='bg-white'>
            <div className='container py-5'>
                <h1 className='my-4'>Fields of Triumph: Agrifarm's Pioneering Agriculture Exhibition</h1>
                <p>Discover Agrifarm's pioneering agriculture exhibition and witness the journey of innovation and excellence that's shaping the future of farming.</p>
            </div>
            <ScrollCarousel
                autoplay
                autoplaySpeed={1}
                speed={5}
                onReady={() => console.log('I am ready')}
                className='mb-5'
            >
                {[0,1,2,3].map((item) => (
                <div key={item} className='bg-blue-300/20 rounded h-64 w-96 overflow-hidden'>
                    <img src={gallerySources[item]} className='w-full' alt="" />
                </div>
                ))}
            </ScrollCarousel>
        </section>
    );
}