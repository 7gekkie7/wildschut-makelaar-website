export async function POST(request: Request) {
  try {
    const body = await request.json() as any;

    if (!body.naam || !body.email || !body.bericht) {
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
Email: ${body.email}
${body.telefoon ? `Telefoon: ${body.telefoon}` : ''}

Bericht:
${body.bericht}`;

        const result = await resend.emails.send({
          from: 'Wildschut Makelaar <formulier@wildschutmakelaar.nl>',
          to: process.env.CONTACT_EMAIL || 'mark@wildschutmakelaar.nl',
          subject: `Nieuw contactformulier: ${subject}`,
          text: emailContent,
        });

        console.log('Email sent:', result);
        const emailId = (result as any)?.id || null;
        return Response.json({ success: true, emailId });
      } catch (emailError) {
        console.error('Resend error:', emailError);
        // Fall through to return success anyway
        return Response.json({ success: true, note: 'Form received (email service error)' });
      }
    }

    return Response.json({ success: true, note: 'Form received (email not configured)' });
  } catch (error) {
    console.error('Contact form error:', error);
    return Response.json({ error: 'Server error' }, { status: 500 });
  }
}
