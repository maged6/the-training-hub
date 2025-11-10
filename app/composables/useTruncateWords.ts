export function useTruncateWords() {
  const truncateWords = (text: string, limit: number = 3): string => {
    if (!text) return "";

    const words = text.split(" ");
    return words.length > limit
      ? words.slice(0, limit).join(" ") + "..."
      : text;
  };

  return { truncateWords };
}
