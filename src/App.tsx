import { useEffect } from 'react';
import * as C from './App.styles';
import { Character } from './components/Character';
import { useCharacter } from './hooks/useCharacter';

const App = () => {

  const charPosition = useCharacter();

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
  }, []);

  const handleKeyDown = (e: KeyboardEvent) => {
    switch(e.code) {
      case 'KeyW':
      case 'ArrowUp':
        charPosition.moveUp();
      break;
      
      case 'KeyA':
      case 'ArrowLeft':
        charPosition.moveLeft();
      break;

      case 'KeyS':
      case 'ArrowDown':
        charPosition.moveDown();
      break;

      case 'KeyD':
      case 'ArrowRight':
        charPosition.moveRight();
      break;
    }
  }

  return(
    <C.Container>
      <C.Map>
        <Character x={charPosition.x} y={charPosition.y} side={charPosition.side} />
      </C.Map>
    </C.Container>
  );
}

export default App;