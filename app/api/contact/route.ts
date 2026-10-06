export async function POST(request: Request) {
  try {
    const body = await request.json() as any;

    if (!body.naam || !body.email || !body.bericht) {
      return Response.json({ error: 'Vereiste velden ontbreken' }, { status: 400 });
    }

    console.log('Contact form submission:', body);

    return Response.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return Response.json({ error: 'Server error' }, { status: 500 });
  }
}
