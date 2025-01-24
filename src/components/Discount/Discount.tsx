import './Discount.scss';
export const Discount = () => {
  return (
    <div className="discount">
      <div className="discount__text">
        скидка <span>на монтаж</span>
      </div>
      <div className="discount__percent">15%</div>
      <div className="discount__condition"> * при покупке кондиционера у нас</div>
    </div>
  );
};
