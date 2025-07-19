"use client";
import BlogsTable from "@/app/components/Tables/BlogsTable";
import { useEffect, useState } from "react";

export default function Page() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const response = await fetch("/api/blogs",{
        cache : "no-store"
      });
      const data = await response.json();
      setData(data);
      setLoading(false);
    };
    getData();
  }, []);
  return (
    <div className="w-full max-w-full py-5">
      <div className="container-fluid">
        <h1 className="text-center mb-5 text-black text-2xl font-semibold">Blogs</h1>
        <BlogsTable data={data} loading={loading} />
      </div>
    </div>
  );
}
