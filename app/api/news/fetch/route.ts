import Parser from 'rss-parser';


export async function GET() {
    const parser = new Parser();
    const feed = await parser.parseURL('https://www.aljazeera.com/news/');
    return Response.json({ feed })
}

