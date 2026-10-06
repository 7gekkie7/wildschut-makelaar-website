import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json() as any;

    if (!body.naam || !body.email || !body.bericht) {
      return Response.json({ error: 'Vereiste velden ontbreken' }, { status: 400 });
    }

    const subject = body.onderwerp || 'Algemeen';
    const emailSubject = `Nieuw contactformulier: ${subject}`;
    
    const emailContent = `Nieuw bericht van ${body.naam}

Onderwerp: ${subject}
${body.adres ? `Adres: ${body.adres}` : ''}

Naam: ${body.naam}
Email: ${body.email}
${body.telefoon ? `Telefoon: ${body.telefoon}` : ''}

Bericht:
${body.bericht}`;

    if (!process.env.RESEND_API_KEY) {
      console.log('Contact form submission (Resend not configured):', body);
      return Response.json({ success: true });
    }

    const data = await resend.emails.send({
      from: 'Wildschut Makelaar <formulier@wildschutmakelaar.nl>',
      to: process.env.CONTACT_EMAIL || 'mark@wildschutmakelaar.nl',
      subject: emailSubject,
      text: emailContent,
    });

    console.log('Email sent:', data);
    return Response.json({ success: true, emailId: data.id });
  } catch (error) {
    console.error('Contact form error:', error);
    return Response.json({ error: 'Server error' }, { status: 500 });
  }
}
