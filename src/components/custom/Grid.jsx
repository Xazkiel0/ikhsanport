import React from 'react'
import { BentoGrid, BentoGridItem } from '../ui/bento-grid'
import { gridItems } from '@/data'

const Grid = () => {
    return (
        <section id='about'>
            <BentoGrid className={""}>
                {gridItems.map(item => {
                    return (
                        <BentoGridItem
                            id={item.id}
                            key={item.id}
                            title={item.title}
                            description={item.description}
                            className={item.className}
                            imgClassName={item.imgClassName}
                            titleClassName={item.titleClassName}
                            img={item.img}
                            spareImg={item.spareImg}
                        />
                    )
                })}
            </BentoGrid>
        </section>
    )
}

export default Grid