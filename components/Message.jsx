import { Card } from '@rewind-ui/core';
export default function Message({ title, message, color }) {
  return (
    <>
      <Card className={color ? 'bg-blue-300 rounded-xl' : 'bg-purple-300 rounded-xl'}>
        <Card.Header>{title}</Card.Header>
        <Card.Body>{message}</Card.Body>
      </Card>
    </>
  );
}
