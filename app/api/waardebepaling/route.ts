export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body.naam || !body.email || !body.adres || !body.postcodePlaats) {
      return Response.json({ error: 'Vereiste velden ontbreken' }, { status: 400 });
    }

    // In production, send email here using a service like SendGrid, Resend, etc.
    // For now, just log it (in a real app, you'd send an email)
    console.log('Waardebepaling form submission:', body);

    return Response.json({ success: true });
  } catch (error) {
    console.error('Waardebepaling form error:', error);
    return Response.json({ error: 'Server error' }, { status: 500 });
  }
}
