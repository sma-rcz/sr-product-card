import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard,ProductImage,ProductTitle,ProductButtons} from '../.';

const product = {
  id: '1',
  title: 'Coffee Mug Especial Edition',
  //img: coffeImg
  
  }



const App = () => {
  return (
   <>
    <ProductCard
              product={product}
              initialValues = {{
                count:6,
                maxCount:10,
              }}
            >
              {
                ({reset ,increseBy,count,maxCount,isMaxCountReached})=>(
                  <>
                    <ProductImage />
                    <ProductTitle />
                    <ProductButtons />

                  
                  </>
                )
                  
                
              }

             

            </ProductCard>
   </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
