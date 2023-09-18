import { Card } from '@rewind-ui/core';
export default function Message({ title, message, color }) {
  return (
    <>
      <Card
        className={
          color
            ? 'bg-blue-300 rounded-xl max-w-xl lg:min-w-[25rem] min-w-[20rem]'
            : 'bg-purple-300 rounded-xl max-w-xl lg:min-w-[25rem] min-w-[20rem]'
        }
      >
        <Card.Header>{title}</Card.Header>
        <Card.Body className="text-center">{message}</Card.Body>
      </Card>
    </>
  );
}
