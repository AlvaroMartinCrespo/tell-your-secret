import { Textarea } from '@rewind-ui/core';
import { Button } from '@rewind-ui/core';

export default function Formulario() {
  return (
    <>
      <div className="flex justify-center items-center p-[1rem] gap-[1rem]">
        <Textarea withRing={false} />
        <Button withRing={false}>Enviar</Button>
      </div>
    </>
  );
}
