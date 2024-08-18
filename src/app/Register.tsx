"use client";

// import core package
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

// import image
import banner from "@/assets/images/banner.png";

// import zod
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

// import shad cn ui components
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { PhoneInput } from "@/components/phoneInput";
import { registerUser } from "@/api/register-api";

// Import Jotai atoms
import { useAtom } from "jotai";
import {
  userNameAtom,
  phoneNumberAtom,
  emailAtom,
  agreeTermsAtom,
} from "@/store/atoms";
import Modal from "@/components/modal";

// Form validation schema
const formSchema = z.object({
  user_name: z.string().min(2, {
    message: "Full Name must be at least 2 characters.",
  }),
  phone_number: z.string().min(10, {
    message: "Phone number must be at least 10 characters.",
  }),
  email: z.string().email().min(2, {
    message: "Email must be at least 2 characters.",
  }),
  agree_terms: z.boolean().refine((val) => val === true, {
    message: "Require",
  }),
});

const Register = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  // Use Jotai atoms for form state
  const [userName, setUserName] = useAtom(userNameAtom);
  const [phoneNumber, setPhoneNumber] = useAtom(phoneNumberAtom);
  const [email, setEmail] = useAtom(emailAtom);
  const [agreeTerms, setAgreeTerms] = useAtom(agreeTermsAtom);

  // Form hook setup with validation
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      user_name: userName,
      phone_number: phoneNumber,
      email: email,
      agree_terms: agreeTerms,
    },
  });

  // Update atoms when form fields change
  useEffect(() => {
    const subscription = form.watch((value, { name }) => {
      switch (name) {
        case "user_name":
          setUserName(value.user_name || "");
          break;
        case "phone_number":
          setPhoneNumber(value.phone_number || "");
          break;
        case "email":
          setEmail(value.email || "");
          break;
        case "agree_terms":
          setAgreeTerms(value.agree_terms || false);
          break;
        default:
          break;
      }
    });
    return () => subscription.unsubscribe();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.watch, setUserName, setPhoneNumber, setEmail, setAgreeTerms]);

  // Form submission handler
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setLoading(true);
      const result = await registerUser(values);
      console.log("Registration successful:", result);
      
      if (result.success) {
        setIsModalOpen(true); // Open the modal
        // Clear the Jotai atoms
        setUserName("");
        setPhoneNumber("");
        setEmail("");
        setAgreeTerms(false);

        // Reset the form after successful submission
        form.reset({
          user_name: "",
          phone_number: "",
          email: "",
          agree_terms: false,
        });
      }
    } catch (error) {
      console.error("Registration failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white">
      <div>
        <Image
          src={banner}
          alt="banner img"
          height={212}
          width={393}
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <div className="text-center">
          <h1 className="font-semibold text-xl text-vvp-cyan">Registration</h1>
          <p className="font-medium text-vvp-gray mt-2">ABC Beta users</p>
        </div>
        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div>
                <FormField
                  control={form.control}
                  name="user_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-vvp-cyan text-base">
                        Full Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Full Name"
                          {...field}
                          onChange={(e) => {
                            field.onChange(e);
                          }}
                          className="font-medium text-base"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="mt-4">
                <FormField
                  control={form.control}
                  name="phone_number"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-vvp-cyan text-base">
                        Mobile Number
                      </FormLabel>
                      <FormControl>
                        <PhoneInput
                          {...field}
                          onChange={(value) => {
                            field.onChange(value);
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="mt-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-vvp-cyan text-base">
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Email"
                          {...field}
                          onChange={(e) => {
                            field.onChange(e);
                          }}
                          className="font-medium text-base"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="mt-6">
                <FormField
                  control={form.control}
                  name="agree_terms"
                  render={({ field: { value, ...field } }) => (
                    <FormItem>
                      <div className="flex items-start gap-2">
                        <FormControl>
                          <Checkbox
                            id="agree_terms"
                            {...field}
                            checked={value}
                            onCheckedChange={(event) => {
                              field.onChange(event);
                            }}
                            className="mt-1"
                          />
                        </FormControl>
                        <label
                          htmlFor="agree_terms"
                          className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 block"
                        >
                          By proceeding, you agree to our Legal{" "}
                          <Link
                            href={"/terms-and-conditions"}
                            className="underline text-vvp-primary font-medium"
                          >
                            Terms & Conditions
                          </Link>
                        </label>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button
                type="submit"
                className="mt-8 w-full bg-vvp-primary hover:bg-vvp-primary/90"
                loading={loading}
              >
                Submit
              </Button>
            </form>
          </Form>
        </div>
        <div>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />  
        </div>
      </div>
    </section>
  );
};

export default Register;
