import BookForm from "@/components/book-form";
import { Card } from "@/components/ui/card";

const BookEventComponent = (props) => {
  return (
    <Card className=" flex justify-center items-center lg:gap-16 min-h-96  gap-8 md:flex-row flex-col-reverse px-4 m-5">
      <BookForm event={props.event}/>
    </Card>
  );
};

export default BookEventComponent;
