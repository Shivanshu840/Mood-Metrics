import { ExternalLink } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@repo/ui/table"
import { Button } from "@repo/ui/button"
import Link from "next/link"

export function ProductsTable() {
  const products = [
    {
      rank: 1,
      name: 'Samsung 65" NEO QLED',
      description: "Flagship QLED TV with Mini-LED technology",
      rating: 4.8,
      reviews: 1245,
      volumes: "75%",
      sentiment: 92,
      link: "#"
    },
    {
      rank: 2,
      name: "Samsung Galaxy S25 Ultra",
      description: "Premium smartphone with advanced camera",
      rating: 4.7,
      reviews: 2850,
      volumes: "75%",
      sentiment: 88,
      link: "#"
    },
    {
      rank: 3,
      name: "Samsung Odyssey G9",
      description: "Ultra-wide curved gaming monitor",
      rating: 4.6,
      reviews: 845,
      volumes: "75%",
      sentiment: 85,
      link: "#"
    },
  ]

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[80px]">RANK</TableHead>
            <TableHead>PRODUCT</TableHead>
            <TableHead className="text-right">RATING</TableHead>
            <TableHead className="text-right">REVIEWS</TableHead>
            <TableHead className="text-right">SENTIMENTS</TableHead>
            <TableHead className="text-right">VOLUMES</TableHead>
            <TableHead className="w-[80px]">LINK</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.rank}>
              <TableCell className="font-medium">{product.rank}</TableCell>
              <TableCell>
                <div>
                  <div className="font-medium">{product.name}</div>
                  <div className="text-sm text-gray-500">{product.description}</div>
                </div>
              </TableCell>
              <TableCell className="text-right">
                <div className="flex items-center justify-end gap-1">
                  {product.rating}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="#f59e0b"
                    stroke="#f59e0b"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-star"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>
              </TableCell>
              <TableCell className="text-right">{product.reviews}</TableCell>
              <TableCell className="text-right ">
                <div className="flex items-center justify-end gap-1">
                  <span className=" h-2 w-2 rounded-full bg-green-500"></span>
                  {product.sentiment}
                </div>
              </TableCell>
              <TableCell className="text-right">{product.volumes}</TableCell>
             
              <TableCell>
                <Button variant="ghost" size="icon">
                 <Link href = {product.link}> <ExternalLink className=" ml-3 h-4 w-4 text-blue-500"/></Link>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

