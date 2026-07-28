export default function Loader({ text = "Loading..." }) {
  return (
    <div className="flex h-full min-h-[50vh] w-full flex-col items-center justify-center gap-3">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-muted border-t-primary" />
      {text && <p className="text-sm text-muted-foreground">{text}</p>}
    </div>
  );
}