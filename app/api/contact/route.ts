export async function POST(request: Request) {
  try {
    const body = await request.json() as any;

    if (!body.naam || !(body.email || body.telefoon) || !body.bericht) {
      return Response.json({ error: 'Vereiste velden ontbreken' }, { status: 400 });
    }

    // Log submission (for now without Resend)
    console.log('Contact form submission:', {
      naam: body.naam,
      email: body.email,
      telefoon: body.telefoon,
      onderwerp: body.onderwerp,
      adres: body.adres,
      bericht: body.bericht,
    });

    // Try to send email with Resend if configured
    if (process.env.RESEND_API_KEY) {
      try {
        const { Resend } = await import('resend');
        const resend = new Resend(process.env.RESEND_API_KEY);
        
        const subject = body.onderwerp || 'Algemeen';
        const emailContent = `Nieuw bericht van ${body.naam}

Onderwerp: ${subject}
${body.adres ? `Adres: ${body.adres}` : ''}

Naam: ${body.naam}
${body.email ? `Email: ${body.email}` : ''}
${body.telefoon ? `Telefoon: ${body.telefoon}` : ''}

Bericht:
${body.bericht}`;

        const result = await resend.emails.send({
          from: 'Wildschut Makelaar <formulier@wildschutmakelaar.nl>',
          to: process.env.CONTACT_EMAIL || 'mark@wildschutmakelaar.nl',
          subject: `Nieuw contactformulier: ${subject}`,
          text: emailContent,
        });

        if (result.error) {
          console.error('Resend error:', result.error);
          return Response.json({ error: 'Versturen mislukt' }, { status: 502 });
        }
        return Response.json({ success: true, emailId: result.data?.id ?? null });
      } catch (emailError) {
        console.error('Resend error:', emailError);
        return Response.json({ error: 'Versturen mislukt' }, { status: 502 });
      }
    }

    console.error('RESEND_API_KEY ontbreekt: bericht is niet gemaild.');
    return Response.json({ error: 'E-mail niet ingesteld' }, { status: 503 });
  } catch (error) {
    console.error('Contact form error:', error);
    return Response.json({ error: 'Server error' }, { status: 500 });
  }
}
