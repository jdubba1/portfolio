
import { FormData } from '@/components/contact';
import { toast, useToast } from '@/components/ui/use-toast';

export function sendEmail(data: FormData) {
  const apiEndpoint = '/api/email';

  fetch(apiEndpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      toast({
        title: response.message,
        description: 'Your message has been sent!',
      });
    })
    .catch((err) => {
      toast({
        description: 'Error Sending Email',
      });
    });
  }