import Formulario from "./Formulario";
import Alerta from "./Alerta";
import useLetras from "../hooks/useLetras";
import Letra from "./Letra";

const AppLetras = () => {
  const { alerta, letra, cargando } = useLetras();
  return (
    <>
      <header>Busqueda de letras de canciones</header>;
      <Formulario />
      <main>
        {alerta ? (
          <Alerta>{alerta}</Alerta>
        ) : letra ? (
          <Letra />
        ) : cargando ? (
          "Cargando..."
        ) : (
          <p className="text-center">Busca Letras de tus artistas favoritos</p>
        )}
      </main>
    </>
  );
};

export default AppLetras;
