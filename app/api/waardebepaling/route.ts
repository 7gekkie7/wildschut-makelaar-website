export async function POST(request: Request) {
  try {
    const body = await request.json() as any;

    if (!body.naam || !body.email || !body.adres || !body.postcodePlaats) {
      return Response.json({ error: 'Vereiste velden ontbreken' }, { status: 400 });
    }

    console.log('Waardebepaling form submission:', body);

    return Response.json({ success: true });
  } catch (error) {
    console.error('Waardebepaling form error:', error);
    return Response.json({ error: 'Server error' }, { status: 500 });
  }
}
