import PropTypes from 'proptypes'


 const ButtonAddToBasket = () => {

    const onClick=()=>{
        console.log('click')
    }

    return (
       <button onClick={onClick} style={{backgroundColor: "green"}}
       className='btn'> 
        Add To Basket
       </button>
    )
}

export default ButtonAddToBasket