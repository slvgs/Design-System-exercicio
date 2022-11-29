import logo from './logo.svg';
import './App.css';

function App() {
  const [products, setProducts] = useState(Itens)


  




  return (
    <ChakraProvider>
      {products.map((produtc) => {

        return <Card produtc={produtc} key={produtc.nome}
        />
        

      })}


    
    </ChakraProvider>
  );
}

export default App;
