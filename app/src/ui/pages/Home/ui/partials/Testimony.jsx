import React, { useState } from "react";
import DragMove from '../../hooks/DragMove';

import farmer1 from 'assets/image/farmer-1.jpg';
import farmer3 from 'assets/image/farmer-3.jpg';
import farmer2 from 'assets/image/farmer-2.jpg';

export function Testimony() {
  const initialImages = [
    { id: 1, src: farmer1, x: 478, y: -10 },
    { id: 2, src: farmer3, x: 30, y: -238 },
    { id: 3, src: farmer2, x: 920, y: -966 },
    // Add more images to this array as needed
  ];

  const [images, setImages] = useState(initialImages);

  const handleDragMove = (e, imageId) => {
    setImages((prevImages) =>
      prevImages.map((image) =>
        image.id === imageId
          ? {
              ...image,
              x: image.x + e.movementX,
              y: image.y + e.movementY,
            }
          : image
      )
    );
  };

  return (
    <section className="bg-white py-5 relative overflow-hidden">
        <div className="container py-5 relative">
            <h2 className="text-left text-6xl mb-6">
                Not just another <br />
                Agliculture platform. <br />
                A partner. What our partner say
            </h2>
        </div>

        <div className="w-max h-[800px] relative">
            {images.map((image) => (
                <DragMove key={image.id} onDragMove={(e) => handleDragMove(e, image.id)} className='w-max'>
                <div
                    style={{
                    transform: `translateX(${image.x}px) translateY(${image.y}px)`
                    }}
                >
                    <div className="hover:scale-105 transition-all duration-300 cursor-grab">
                      <img src={image.src} alt={`Farmer ${image.id}`} className='rounded-3xl w-96 drag-move' draggable="false" />
                    </div>
                </div>
                </DragMove>
            ))}
        </div>

        <h2 className="text-left text-3xl mb-6 absolute bottom-20 right-20">
        "Outstanding support from Agrifarm! <br />
        They helped us from setup <br />
        to scaling seamlessly. Highly recommended!
        </h2>

    </section>
  );
}
