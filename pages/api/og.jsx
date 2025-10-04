import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  try {
    const { searchParams } = new URL(req.url);
    const title = searchParams.get('title') || 'Sean Becker';
    const description =
      searchParams.get('description') || 'Engineering and Technology';

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background:
              'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #064e3b 100%)',
            position: 'relative',
            fontFamily: 'system-ui, -apple-system, sans-serif',
          }}
        >
          {/* Gradient orb effect */}
          <div
            style={{
              position: 'absolute',
              width: '600px',
              height: '600px',
              borderRadius: '50%',
              background:
                'radial-gradient(circle, rgba(52, 211, 153, 0.3) 0%, transparent 70%)',
              top: '-200px',
              left: '50%',
              transform: 'translateX(-50%)',
              filter: 'blur(60px)',
            }}
          />

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '80px',
              zIndex: 1,
              maxWidth: '1000px',
            }}
          >
            <div
              style={{
                fontSize: 20,
                color: '#a0a0a0',
                marginBottom: 30,
                textTransform: 'uppercase',
                letterSpacing: '2px',
              }}
            >
              Sean Becker
            </div>
            <div
              style={{
                fontSize: 64,
                fontWeight: 'bold',
                color: '#ffffff',
                marginBottom: 30,
                lineHeight: 1.2,
                textAlign: 'center',
              }}
            >
              {title}
            </div>
            {description && (
              <div
                style={{
                  fontSize: 28,
                  color: '#94a3b8',
                  textAlign: 'center',
                  maxWidth: '800px',
                }}
              >
                {description}
              </div>
            )}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    );
  } catch (e) {
    console.log(e.message);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
