import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Newspaper, BarChart2 } from "lucide-react";
import TradingViewTimeline from "@/components/widgets/TradingViewTimeline";
import TradingViewCalendar from "@/components/widgets/TradingViewCalendar";
import { Helmet } from "react-helmet-async";

export default function News() {
    return (
        <Layout>
            <Helmet>
                <title>Market News & Analysis | Celestial Trader</title>
                <meta name="description" content="Stay updated with the latest market news, economic calendar events, and expert technical analysis." />
            </Helmet>
            {/* Hero Section */}
            <section className="relative min-h-[50vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
                <div className="absolute inset-0 bg-background/95">
                    <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />
                    <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-gold-500/5 rounded-full blur-[100px]" />
                </div>

                <div className="container relative z-10 text-center max-w-4xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                        <Newspaper className="w-4 h-4 text-blue-400" />
                        <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">Daily Market Updates</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
                        Market <span className="text-transparent bg-clip-text bg-gold-gradient">Insights</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
                        Stay ahead of the markets with our expert analysis, breaking news, and real-time economic data.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-12">
                <div className="container">
                    <Tabs defaultValue="news" className="space-y-12">
                        <div className="flex justify-center">
                            <TabsList className="grid w-full max-w-md grid-cols-3 bg-card/50 border border-white/10 p-1">
                                <TabsTrigger value="news" className="data-[state=active]:bg-gold-500 data-[state=active]:text-background font-bold">Latest News</TabsTrigger>
                                <TabsTrigger value="analysis" className="data-[state=active]:bg-gold-500 data-[state=active]:text-background font-bold">Analysis</TabsTrigger>
                                <TabsTrigger value="calendar" className="data-[state=active]:bg-gold-500 data-[state=active]:text-background font-bold">Calendar</TabsTrigger>
                            </TabsList>
                        </div>

                        <TabsContent value="news" className="space-y-8">
                            <Card className="bg-card/20 border-white/5 overflow-hidden min-h-[600px]">
                                <CardContent className="p-0 h-full">
                                    <TradingViewTimeline />
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="calendar">
                            <Card className="bg-card/20 border-white/5 overflow-hidden min-h-[600px]">
                                <CardContent className="p-0 h-full">
                                    <TradingViewCalendar />
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="analysis" className="text-center py-12">
                            <div className="max-w-2xl mx-auto">
                                <div className="w-20 h-20 bg-gold-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <BarChart2 className="w-10 h-10 text-gold-500" />
                                </div>
                                <h3 className="text-3xl font-bold mb-4">Premium Technical Analysis</h3>
                                <p className="text-muted-foreground mb-8">
                                    Detailed chart analysis and institutional-grade reports are available exclusively for active clients.
                                </p>
                                <Button size="lg" className="bg-gold-gradient text-background font-bold rounded-full">
                                    Log In to Access
                                </Button>
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </section>
        </Layout>
    );
}
