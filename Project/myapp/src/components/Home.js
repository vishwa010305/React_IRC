import '../components/Home.css';
const Home =()=>{ 
    return(
        <>
        <form className="cont">
            <img src="https://i.pinimg.com/originals/21/9b/47/219b4780653c8ed78bc25ed3cd14e6ee.jpg "/>
        </form>
        <form className='txt'>
        <h2>Shop by age</h2>
        </form>
        <form className='age'>
            <ul>
                <li className='age'><img src="https://www.funcorp.in/cdn/shop/files/0-12m_180x_a4542543-c305-435b-8944-7d2b15b7523e_170x.webp?v=1668157030"/></li>
                <li className='age'><img src="https://www.funcorp.in/cdn/shop/files/1-2_180x_4975aebf-4b8c-446d-a8a0-621ec4bee7bd_170x.jpg?v=1668164436"/></li>
                <li className='age'><img src="https://www.funcorp.in/cdn/shop/files/3-4_180x_88162e2a-e4b6-4fd8-9b33-59c82e7bf7cb_170x.jpg?v=1668162939"/></li>
                <li className='age'><img src="https://www.funcorp.in/cdn/shop/files/8-11_180x_32bdd88e-d87b-4872-bbfb-d8ca612077f9_170x.jpg?v=1668164019"/></li>
                <li className='age'><img src="https://www.funcorp.in/cdn/shop/files/12-14_180x_b75ef0fa-47fb-4a87-b4e9-a986d316ed2b_170x.webp?v=1668161779"/></li>
            </ul>
        </form>

        <form className='txt2'>
        <h2>Choose your favourte</h2>
        </form>
        <form className='fav'>
            <ul>
                {/* <li className='fav'><img src="https://www.funcorp.in/cdn/shop/files/Baby_Alive_090523_940x.jpg?v=1683629088"/></li> */}
                <li className='fav'><img src="https://www.funcorp.in/cdn/shop/files/Beyblade_burst_quaddrive_090523_940x.jpg?v=1683629088"/></li>
            </ul>
        </form>
        
        </>
    )
}

export default Home