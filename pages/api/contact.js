export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { name, email, phone, service, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required' });
  }

  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      access_key: 'c2c61310-b7eb-405e-91b5-952722490fea',
      subject: `New Quote Request from ${name}`,
      from_name: 'Ravik Painting Website',
      name,
      email,
      phone: phone || 'Not provided',
      service: service || 'Not specified',
      message,
    }),
  });

  const data = await response.json();

  if (data.success) {
    return res.status(200).json({ success: true, message: 'Quote request sent! We will get back to you within 24 hours.' });
  }

  return res.status(500).json({ error: 'Failed to send. Please try again.' });
}
