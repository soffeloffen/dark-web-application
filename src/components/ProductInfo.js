const products =[
    {
        amount: 0,
        id: '1',
        type: 'Drug',
        title: 'Magic Mushrooms',
        shortdescription: 'Beautiful, locally grown shrooms',
        longdescription: 'These magic mushrooms are wild, cultivated mushrooms that contain psilocybin, a naturally-occurring psychoactive and hallucinogenic compound. Psilocybin is considered one of the most well-known psychedelics, and thus of the highest quality on the Dark Web',
        onsale: false,
      },
      {
        amount: 0,
        id: '2',
        type: 'Drug',
        title: 'Cannabis sativa',
        shortdescription: 'Pure Cannabis, Common Use',
        longdescription: 'Cannabis sativa is an annual herbaceous flowering plant indigenous to Eastern Asia, but now of cosmopolitan distribution due to widespread cultivation. It is a recreational drug, which can be used for multiple sclerosis and nerve pain.',
        'onsale': false,
      }
]

const ProductInfo = () => {
    return (
    <>
    {products.map((product) => (
    <h3>{product.title}</h3>))}
    </>
    )     
}

export default ProductInfo


    /* <div className='product'>
            <h1>
                {product.title}
            </h1>
            <p>
                {product.longdescription}
            </p>
        </div> */