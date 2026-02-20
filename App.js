import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ImageBackground, Button, ScrollView } from 'react-native';
import Alumno from './Alumno';

export default function App()
{

  const saludo = () => {
    console.log("Hola mundo");
  };

  const Alumnos = [
  { nombre: 'CANDELARIA MORA SAMANTHA', matricula: '2114354', foto: require('./Celso piña.png'), posicion: 'izq' },
  { nombre: 'CANTU SILVA JAVIER', matricula: '2111889', foto: require('./Celso piña.png'), posicion: 'der' },
  { nombre: 'CARMONA LOZANO ANGEL EMILIANO', matricula: '2069119', foto: require('./Celso piña.png'), posicion: 'izq' },
  { nombre: 'CASTILLO ACOSTA JORGE', matricula: '2132842', foto: require('./Celso piña.png'), posicion: 'der' },
  { nombre: 'DAVILA GONZALEZ ALDO ADRIAN', matricula: '1994122', foto: require('./Celso piña.png'), posicion: 'izq' },
  { nombre: 'DURAN BARRIENTOS FABRIZIO', matricula: '2018230', foto: require('./Celso piña.png'), posicion: 'der' },
  { nombre: 'FLORES GONZALEZ SEBASTIAN', matricula: '2104564', foto: require('./Celso piña.png'), posicion: 'izq' },
  { nombre: 'DURAN BARRIENTOS FABRIZIO', matricula: '2018230', foto: require('./Celso piña.png'), posicion: 'der' },
  { nombre: 'FLORES GONZALEZ SEBASTIAN', matricula: '2104564', foto: require('./Celso piña.png'), posicion: 'izq' },
  { nombre: 'FLORES LÓPEZ DIEGO', matricula: '2066033', foto: require('./Celso piña.png'), posicion: 'der' },
  { nombre: 'FLORES MARTINEZ ERICK ADRIAN', matricula: '2132976', foto: require('./Celso piña.png'), posicion: 'izq' },
  { nombre: 'GARZA AVALOS DIEGO', matricula: '2066114', foto: require('./Celso piña.png'), posicion: 'der' },
  { nombre: 'GONZALEZ OVALLE CHRISTIAN GABRIEL', matricula: '2031243', foto: require('./Celso piña.png'), posicion: 'izq' },
  { nombre: 'GRANJA PEÑA DIEGO', matricula: '2064733', foto: require('./Celso piña.png'), posicion: 'der' },
  { nombre: 'IBARRA RODRIGUEZ ALEXIS', matricula: '2031243', foto: require('./Celso piña.png'), posicion: 'izq' },
  { nombre: 'MARTINEZ ELIAS ANGEL SEBASTIAN', matricula: '2064733', foto: require('./Celso piña.png'), posicion: 'der' },
  { nombre: 'MENDIETA GONZALEZ ESMERALDA GABRIELA', matricula: '2094647', foto: require('./Celso piña.png'), posicion: 'izq' },
  { nombre: 'MIRELES VELAZQUEZ ALEJANDRO', matricula: '2005102', foto: require('./Celso piña.png'), posicion: 'der' },
  { nombre: 'MONSIVAIS SALAZAR ANDRES', matricula: '2064574', foto: require('./Celso piña.png'), posicion: 'izq' },
  { nombre: 'PARRAZALEZ VALDESPINO MARTHA JULIETA', matricula: '2024783', foto: require('./Celso piña.png'), posicion: 'der' },
  { nombre: 'PEÑA MUNGARRO LUIS ANGEL', matricula: '2066077', foto: require('./Celso piña.png'), posicion: 'izq' },
  { nombre: 'PUENTE REYNOSO JULIO CESAR', matricula: '2092151', foto: require('./Celso piña.png'), posicion: 'der' },
  { nombre: 'RAMIREZ LOPEZ BRYAN', matricula: '2103708', foto: require('./Celso piña.png'), posicion: 'izq' },
  { nombre: 'RAMOS AVILA LILIANA VALERIA', matricula: '2115192', foto: require('./Celso piña.png'), posicion: 'der' },
  { nombre: 'RICO JAUREGUI MAURICIO', matricula: '2037503', foto: require('./Celso piña.png'), posicion: 'izq' },
  { nombre: 'RIVERA LUNA ADRIAN', matricula: '2131513', foto: require('./Celso piña.png'), posicion: 'der' },
  { nombre: 'RIVERA REYNA JOSE EMILIO', matricula: '2013503', foto: require('./Celso piña.png'), posicion: 'izq' },
  { nombre: 'RODRIGUEZ OLVERA ROSA ISELA', matricula: '2004613', foto: require('./Celso piña.png'), posicion: 'der' },
  { nombre: 'RODRIGUEZ RODRIGUEZ ANGEL AZAEL', matricula: '2133022', foto: require('./Celso piña.png'), posicion: 'izq' },
  { nombre: 'SANCHEZ GALARZA JUAN CARLOS', matricula: '2026061', foto: require('./Celso piña.png'), posicion: 'der' },
  { nombre: 'SOLIS ORTIZ ALFREDO', matricula: '2095320', foto: require('./Celso piña.png'), posicion: 'izq' },
  { nombre: 'VELAZQUEZ ABREGO HERWIN DANIEL', matricula: '2025350', foto: require('./Celso piña.png'), posicion: 'der' },
  { nombre: 'VILLAGRA RODRIGUEZ ANDRES NEHUEL', matricula: '2103895', foto: require('./Celso piña.png'), posicion: 'izq' },
  { nombre: 'ZACATENCO OLIVE RODRIGO', matricula: '1857791', foto: require('./Celso piña.png'), posicion: 'der' },
  { nombre: 'ZAVALA CANTU TERESA MARGARITA', matricula: '2025218', foto: require('./Celso piña.png'), posicion: 'izq' }
];


  return (
     <ImageBackground
      source={require('./Celso piña.png')}
      style={styles.background}
      resizeMode="cover"
    >

      <ScrollView contentContainerStyle={styles.container}>
        {Alumnos.map((alumno, index) => (
          <Alumno
            key={index}
            nombre={alumno.nombre}
            matricula={alumno.matricula}
            foto={alumno.foto}
            posicion={alumno.posicion}
            style={{ backgroundColor: '#25b373' }}
          />
        ))}
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background :{
    flex : 1,
    width: '100%',
    height: '100%',
  },

  container: {
    paddingTop: 50,
    paddingBottom: 50, 
    alignItems: 'center',
    
  },
  boton: {
    backgroundColor: '#740707',
  },
});
