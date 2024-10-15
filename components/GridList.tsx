import Spinner from "./Spinner";

interface GridListProps {
  data: { createdAt: string; filename: string }[];
  loading: boolean;
}

const GridList: React.FC<GridListProps> = ({ data, loading }) => {
  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {data.map((item, index) => (
        <div
          key={index}
          className="
            relative flex items-center space-x-3 
            rounded-lg border 
            border-border bg-background
            dark:border-muted dark:bg-card
            px-12 py-5 shadow-sm 
            focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 
            hover:border-secondary dark:hover:border-accent
          "
        >
          <div className="min-w-0 flex-1">
            <p className="text-xs text-muted dark:text-muted-foreground">
              {item.createdAt}
            </p>
            <p className="text-foreground dark:text-card-foreground font-semibold text-xl">
              {item.filename}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GridList;
