'use client'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { User, MailIcon, ArrowRightIcon } from 'lucide-react'
import { useForm } from 'react-hook-form'

const Form = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (formData) => {
    window.location.href = `mailto:emmanueltokula03@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-4">
      {/* Name input */}
      <div className="relative flex items-center">
        <Input {...register('name')} type="text" id="name" placeholder="Name" />
        <User className="absolute right-6" size={20} />
      </div>

      {/* Email input */}
      <div className="relative flex items-center">
        <Input {...register('email')} type="email" id="email" placeholder="Email" />
        <MailIcon className="absolute right-6" size={20} />
      </div>

      {/* Message textarea */}
      <div className="relative flex items-center">
        <Textarea {...register('message')} id="message" placeholder="Comment" />
        <User className="absolute top-4 right-6" size={20} />
      </div>

      <Button type="submit">
        Let’s Talk <ArrowRightIcon className="ml-2" />
      </Button>
    </form>
  );
};

export default Form;
