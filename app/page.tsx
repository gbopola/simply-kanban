import Input from "@/components/Input/Input";
import Button from "../components/Button";
import Label from "@/components/Label";

export default function Home() {
  return (
    <div>
      <Button>Button Primary</Button>
      <Button size="lg">Button Primary</Button>
      <Button variant="destructive">Button Destructive</Button>
      <Button size="lg" variant="destructive">
        Button Destructive
      </Button>
      <Button variant="secondary">Button Secondary</Button>
      <div>
        <Label htmlFor="label">Text Field (Idle)</Label>
        <Input placeholder="Enter task name" />
      </div>
      <div>
        <Label htmlFor="label">Text Field (error)</Label>
        <Input variant="error" isInvalid placeholder="Enter task name" />
      </div>
    </div>
  );
}
