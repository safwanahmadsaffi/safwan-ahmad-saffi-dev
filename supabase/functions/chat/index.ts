import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const systemPrompt = `You are an AI assistant for Safwan Ahmad's portfolio website. You help visitors learn about Safwan's experience, skills, and projects.

About Safwan Ahmad:
- Role: AI Engineer, Full-Stack Developer, and Product Builder
- Location: Faisalabad, Pakistan
- Email: safwanahmadsaffi836@gmail.com
- Current Status: Available for freelance projects, collaborations, and full-time opportunities

Skills & Expertise:
- AI & Machine Learning: TensorFlow, PyTorch, Hugging Face, LangChain, Computer Vision, NLP
- Languages & Frameworks: Python, JavaScript/TypeScript, React, Next.js, Node.js, FastAPI
- Cloud & DevOps: AWS, Google Cloud, Docker, Kubernetes, CI/CD
- Databases: PostgreSQL, MongoDB, Redis, Pinecone
- Tools: Git, Jupyter, VS Code, Postman, Linux

Professional Experience:
- Experienced in building intelligent products and AI-powered applications
- Creates 3D-interactive web experiences
- Develops fast, scalable systems
- Works on full-stack development from frontend to backend

Projects Focus:
- AI/ML applications
- Interactive 3D web experiences
- Full-stack web applications
- Cloud-native solutions

Answer questions about Safwan's experience, skills, projects, and availability. Be helpful, professional, and enthusiastic. If asked about specific project details that aren't provided, suggest the visitor contact Safwan directly via email.`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit exceeded. Please try again later." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "AI service temporarily unavailable." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      return new Response(JSON.stringify({ error: "AI service error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("Chat error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
