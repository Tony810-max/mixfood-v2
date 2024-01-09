/* eslint-disable import/no-unresolved */

import React from 'react';

import imgMain from '../../../../assets/images/Review/thai-food.jpg';
import { Carousel } from 'antd';
import ReviewCard from '../../../../components/ReviewCard';
// import ReviewCard from '../../../../components/ReviewSliderCard';

// import { Carousel } from 'antd';

export default function ReviewSection() {
  return (
    <div className=" container py-20 flex flex-col gap-10">
      <span className="text-5xl font-dancing-script flex justify-center font-extrabold">
        Review
      </span>
      <div className="flex gap-5 ">
        <div className="flex-1">
          <img src={imgMain} alt="" className="" />
        </div>
        <div className="flex-1 overflow-hidden my-auto">
          <Carousel className="w-full h-full" autoplay>
            <ReviewCard
              region="Viet Nam"
              name={'Nhat Minh'}
              comment={`Mình tình cờ biết đến quán khi đặt đồ ăn trên Grab. Hôm đó mình đặt món Pad hải sản có 70k mà nhận nguyên 1 hộp đầy. Ăn lại rất ngon nên kết luôn.
              Hôm sau mình dẫn bạn qua tận quán để ăn Gọi thêm mấy món thì cảm nhận chung giá đều rất rẻ. Tuy các món giá chỉ từ 60k-80k nhưng đầy ú nu. Bằng các quán # bán hơn 100k. Và khẩu vị rất hợp với mình
              Các bạn thích ăn đồ Thái nên thử nhé !`}
              dateTime={'12 / 4 / 2023'}
            />
            <ReviewCard
              region="Viet Nam"
              name={'Thu Ha'}
              comment={`Mình order trên Grab food 1 phần Pad Thái hải sản. Nhận được là 1 bát to ú nu như hình. Mùi vị ngon, còn có tận 2 con tôm to nữa. Lần sau mình sẽ thử món khác. Cho món này 10đ ạ
              `}
              dateTime={'12 / 7 / 2023'}
            />
          </Carousel>
        </div>
      </div>
    </div>
  );
}
