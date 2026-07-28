
import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ProductCard = ({ product }) => {
  return (
    <Card className="group flex h-full flex-col overflow-hidden rounded-2xl border transition-all duration-300 hover:shadow-xl">
      {/* Product Image */}
      <Link href={`/products/${product.id}`}>
        <div className="relative flex h-64 items-center justify-center overflow-hidden bg-muted p-6">
          <img
            src={product.image}
            alt={product.title}
            fill
            className="object-contain p-6 transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw,
                   (max-width: 1200px) 50vw,
                   25vw"
          />
        </div>
      </Link>

      {/* Product Details */}
      <CardContent className="flex flex-1 flex-col p-5">
        <Badge className="mb-3 w-fit capitalize">
          {product.category}
        </Badge>

        <h2 className="min-h-[56px] text-lg font-semibold leading-6 line-clamp-2">
          {product.title}
        </h2>

        <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
          {product.description}
        </p>

        <div className="mt-auto pt-5">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-1 text-sm">
              <span>⭐</span>
              <span className="font-medium">{product.rating.rate}</span>
              <span className="text-muted-foreground">
                ({product.rating.count})
              </span>
            </div>

            <span className="text-xl font-bold text-green-600 dark:text-green-400">
              ${product.price}
            </span>
          </div>

          <Button className="w-full">
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;