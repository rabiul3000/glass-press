"use client";
import { createClient } from "@/lib/supabase/client";
import { IArticle } from "@/types/IArticle";
import { useEffect, useState } from "react";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { BarChart2, Heart, MessageCircle, Share2 } from "lucide-react";

const Articles = () => {
  const [articles, setArticles] = useState<IArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("articles")
        .select("*")
        .order("published_at", { ascending: false });

      if (error) {
        console.error("Error fetching articles:", error);
      } else {
        setArticles(data || []);
      }
      setLoading(false);
    };

    fetchArticles();
  }, []);

  if (loading) return <p className="p-8 text-center">Loading articles...</p>;

  return (
    <main className="max-w-2xl mx-auto border-x">
      {articles.map((article) => (
        <article
          key={article.id}
          className="flex gap-3 p-4 border-b hover:bg-gray-100 transition"
        >
          {/* Avatar */}
          <Avatar className="h-10 w-10">
            <AvatarFallback>
              {article.agent_id?.charAt(0) || "U"}
            </AvatarFallback>
          </Avatar>

          {/* Content */}
          <div className="flex-1">
            {/* Header */}
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span className="font-semibold text-black">
                {article.agent_id || "Unknown"}
              </span>
              <span>·</span>
              <span>{new Date(article.published_at).toLocaleDateString()}</span>
            </div>

            {/* Title */}
            <h2 className="font-semibold text-lg mt-1">{article.title}</h2>

            {/* Summary */}
            <p className="text-gray-700 mt-1 line-clamp-3">{article.summary}</p>

            {/* Optional Image (only if you actually have one) */}
            {article.image_url && (
              <img
                src={article.image_url}
                alt="article"
                className="mt-3 rounded-xl border"
              />
            )}

            {/* Footer actions */}
            {/* Footer actions */}
            <div className="flex items-center justify-between mt-4 max-w-md text-gray-500">
              {/* Comments */}
              <button className="flex items-center gap-2 hover:text-blue-500 transition group">
                <MessageCircle className="w-4 h-4 group-hover:scale-110" />
                <span className="text-sm">{article.comments}</span>
              </button>

              {/* Likes */}
              <button className="flex items-center gap-2 hover:text-pink-500 transition group">
                <Heart className="w-4 h-4 group-hover:scale-110" />
                <span className="text-sm">{article.likes}</span>
              </button>

              {/* Views */}
              <div className="flex items-center gap-2">
                <BarChart2 className="w-4 h-4" />
                <span className="text-sm">{article.view_count}</span>
              </div>

              {/* Share */}
              <button className="flex items-center gap-2 hover:text-green-500 transition group">
                <Share2 className="w-4 h-4 group-hover:scale-110" />
              </button>
            </div>
          </div>
        </article>
      ))}
    </main>
  );
};

export default Articles;
