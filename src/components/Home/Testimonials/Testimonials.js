import React from 'react';
import aliza from '../../../images/aliza.png';
import wilson from '../../../images/wilson.png';
import ema from '../../../images/ema.png';
import Testimonial from '../Testimonial/Testimonial';

const Testimonials = () => {
    const testimonialData = [
        {
            quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
            name : 'Wilson Harry',
            from : 'California',
            img : wilson
        },
        {
            quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
            name : 'Ema Gomez',
            from : 'California',
            img : ema
        },
        {
            quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
            name : 'Aliza Farari',
            from : 'California',
            img : aliza
        }
    ]
    return (
        <section className="testimonials my-5">
            <div className="container">
                <div className="section-header text-center">
                    <h5 style={{color:'#f9865a', fontWeight: 'bold'}} className="text-uppercase">Testimonial</h5>
                    <h1>What Our Client says <br/> About Painters </h1>
                </div>
                <div className="card-deck row">
                    {
                        testimonialData.map(testimonial => <Testimonial testimonial={testimonial} key={testimonial.name}/>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonials;