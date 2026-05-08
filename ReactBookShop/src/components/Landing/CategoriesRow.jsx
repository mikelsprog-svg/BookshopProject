import categories from '../../data/categories.json';
import './CategoriesRow.css'
import fictionImg from '../../assets/fiction.png'
import fantasyImg from '../../assets/fantasy.png'
import technologyImg from '../../assets/technology.png'
import scienceImg from '../../assets/science.png'
import historyImg from '../../assets/history.png'
import businessImg from '../../assets/business.png'

const imageMap = {
    'fiction.png': fictionImg,
    'fantasy.png': fantasyImg,
    'technology.png': technologyImg,
    'science.png': scienceImg,
    'history.png': historyImg,
    'business.png': businessImg,
}

export function CategoriesRow({onCategoryClick}) {

    const visibleCat = categories.filter(cat => !cat.isAdulta && cat.image).slice(0, 6);
    if (visibleCat.length === 0) {
        return null
    }
    
    const getImageUrl = (imageName) => {
        return imageMap[imageName] || fictionImg;
    }

    return (
       
        <section className="categories_section">
            <h2 className="categories_title">Categorías Destacadas</h2>
                <div className="categories_row_container">
                    {visibleCat.map((cat) => (
                        <div className='category_card' key = {cat.Id}
                        onClick={() => onCategoryClick?.(cat.Id)}>
                            <img className="category_image" src={getImageUrl(cat.image)} alt={cat.Name} />
                            <span className="category_name">{cat.Name}</span>
                        </div>
                    ))  
                    
                    }
                </div>
        </section>
    )   ;
}
