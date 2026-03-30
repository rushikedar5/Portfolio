export default function Loading() {
  return (
    <div className="flex flex-col gap-6 pt-8 animate-pulse">
      <div className="h-10 w-48 bg-muted rounded-md" />
      <div className="h-4 w-96 bg-muted rounded-md" />
      <div className="h-4 w-72 bg-muted rounded-md" />
      <div className="grid grid-cols-2 gap-6 mt-4">
        <div className="h-48 bg-muted rounded-xl" />
        <div className="h-48 bg-muted rounded-xl" />
      </div>
    </div>
  );
}