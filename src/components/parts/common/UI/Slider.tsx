import { Carousel } from 'flowbite-react';

import Image from 'next/image'
import React from 'react'

export default function Slider({ img }: { img: string[] | string }) { 
    return (

        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 ">
            {
                typeof img === "string" || img?.length === 1 ? <Image
                    width={800} height={600}
                    style={{
                        width: "100%",
                        height: "100%",

                    }}
                    src={typeof img === "string" ? img : img[0]}
                    className="aspect-video w-full object-cover"
                    alt=""
                /> :
                    <Carousel indicators={false} slide={false}>
                        {img.map((iSrc, i) => <Image key={i}
                            width={800} height={600}
                            style={{
                                width: "100%",
                                height: "100%",

                            }}
                            src={iSrc}
                            className="aspect-video w-full object-cover"
                            alt=""
                        />)}
                    </Carousel>}
        </div>

    )
}
