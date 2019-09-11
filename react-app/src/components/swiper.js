import React, { Component } from 'react'
import { Carousel } from 'antd';

export default class swiper extends Component {
    render() {
        let { data } = this.props
        
        return (
            <Carousel autoplay>
                {
                   data&&  data.map((item, index) =>
                        <div key={index}>
                           <h3>
                               <img src={item} />
                            </h3>
                        </div>
                    )
                }
            </Carousel>
        )
    }
}
