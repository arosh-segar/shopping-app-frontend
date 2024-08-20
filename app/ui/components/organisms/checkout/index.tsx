import {
  FormErrors,
  PaymentFormData,
  ShippingFormData,
} from "@/app/lib/definitions";
import { paymentSchema, shippingSchema } from "@/app/lib/form-schemas";
import useBookStore from "@/app/lib/zustand-store";
import {
  ActionIcon,
  Anchor,
  Button,
  Flex,
  Grid,
  Group,
  Radio,
  rem,
  Text,
  TextInput,
} from "@mantine/core";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import { BsCardText, BsHouse } from "react-icons/bs";
import CheckoutCartSectionOrganism from "./CheckoutCartSectionOrganism";

const CheckoutOrganism = () => {
  const { push } = useRouter();
  const [paymentErrors, setPaymentErrors] = useState<FormErrors>({});
  const [shippingErrors, setShippingErrors] = useState<FormErrors>({});
  const [formData, setFormData] = useState<PaymentFormData & ShippingFormData>({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    phoneNumber: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("card");
  const { totalCost } = useBookStore();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const inputsValid = () => {
    var isValid = true;
    const result = paymentSchema.safeParse({
      cardNumber: formData.cardNumber,
      expiryDate: formData.expiryDate,
      cvv: formData.cvv,
    });

    if (!result.success) {
      const errors: FormErrors = {};
      result.error.errors.forEach((error) => {
        errors[error.path[0] as string] = error.message;
      });
      setPaymentErrors(errors);
      isValid = false;
    } else {
      setPaymentErrors({});
    }

    const shippingResult = shippingSchema.safeParse({
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      address: formData.address,
      phoneNumber: formData.phoneNumber,
    });

    if (!shippingResult.success) {
      const errors: FormErrors = {};
      shippingResult.error.errors.forEach((error) => {
        errors[error.path[0] as string] = error.message;
      });
      setShippingErrors(errors);
      isValid = false;
    } else {
      setShippingErrors({});
    }

    return isValid;
  };

  return (
    <Flex direction="column">
      <Group gap={10} mb={20}>
        <Group gap={0}>
          <ActionIcon variant="transparent" aria-label="Settings">
            <BsHouse size={15} color="gray" />
          </ActionIcon>
          <Anchor
            href="#"
            size="sm"
            c="gray"
            fw={400}
            target="_blank"
            underline="never"
          >
            Home
          </Anchor>
        </Group>
        <Text size="md" c="gray">
          /
        </Text>
        <Anchor
          href="#"
          c="gray"
          fw={400}
          size="sm"
          target="_blank"
          underline="never"
        >
          Cart Page
        </Anchor>
        <Text size="md" c="gray">
          /
        </Text>
        <Anchor
          href="#"
          c="dark"
          fw={500}
          size="sm"
          target="_blank"
          underline="never"
        >
          Shop Page
        </Anchor>
      </Group>
      <Grid gutter={{ base: 5, xs: "md", md: "xl", xl: 10 }} mb={80}>
        <Grid.Col span={{ base: 12, md: 6, lg: 8 }}>
          <Grid gutter={{ base: 5, xs: "md", md: "xl" }}>
            <Grid.Col span={{ base: 12 }} mt={20}>
              <Text size="30px" fw={600}>
                Pay Now!
              </Text>
            </Grid.Col>
            <Grid.Col span={{ base: 12 }}>
              <Text size="md" fw={600}>
                Billing details
              </Text>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
              <TextInput
                name="firstName"
                leftSectionPointerEvents="none"
                label="First Name"
                placeholder="John"
                color="green"
                value={formData.firstName}
                onChange={handleChange}
                error={shippingErrors.firstName}
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
              <TextInput
                name="lastName"
                leftSectionPointerEvents="none"
                label="Last Name"
                placeholder="Doe"
                color="green"
                value={formData.lastName}
                onChange={handleChange}
                error={shippingErrors.lastName}
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12 }}>
              <TextInput
                name="email"
                leftSectionPointerEvents="none"
                label="Your email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                error={shippingErrors.email}
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
              <TextInput
                name="phoneNumber"
                leftSectionPointerEvents="none"
                label="Mobile number"
                value={formData.phoneNumber}
                onChange={handleChange}
                error={shippingErrors.phoneNumber}
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
              <TextInput
                name="address"
                leftSectionPointerEvents="none"
                label="Country"
                placeholder="Sri Lanka"
                value={formData.address}
                onChange={handleChange}
                error={shippingErrors.address}
              />
            </Grid.Col>
          </Grid>

          <Grid.Col span={{ base: 12 }} mt={60}>
            <Text size="md" fw={600}>
              Payment method
            </Text>
          </Grid.Col>
          <Grid.Col span={{ base: 12 }} mb={30}>
            <Radio.Group
              value={paymentMethod}
              onChange={setPaymentMethod}
              withAsterisk
            >
              <Group mt="xl">
                <Radio color="green" value="card" label="Card" />
                <Radio color="green" value="bank" label="Bank" />
                <Radio color="green" value="transfer" label="Transfer" />
              </Group>
            </Radio.Group>
          </Grid.Col>
          <Grid
            gutter={{ base: 5, xs: "md", md: "xl" }}
            p={30}
            bg="rgba(0, 0, 0, .05)"
            className="rounded-md"
          >
            <Grid.Col span={{ base: 12 }}>
              <TextInput
                name="cardNumber"
                leftSectionPointerEvents="none"
                size="sm"
                leftSection={
                  <BsCardText style={{ width: rem(18), height: rem(18) }} />
                }
                label="Card number"
                placeholder="1234 5678 9101 1121"
                value={formData.cardNumber}
                onChange={handleChange}
                error={paymentErrors.cardNumber}
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
              <TextInput
                name="expiryDate"
                leftSectionPointerEvents="none"
                size="sm"
                label="Expiration Date"
                placeholder="MM/YY"
                value={formData.expiryDate}
                onChange={handleChange}
                error={paymentErrors.expiryDate}
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
              <TextInput
                name="cvv"
                leftSectionPointerEvents="none"
                size="sm"
                label="CVV"
                placeholder="123"
                value={formData.cvv}
                onChange={handleChange}
                error={paymentErrors.cvv}
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12 }}>
              <Button
                variant="filled"
                color="green"
                w="100%"
                onClick={() => {
                  if (inputsValid()) {
                    push("/");
                  }
                }}
              >
                <Text c="dark" fw={600}>{`Pay $ ${totalCost}`}</Text>
              </Button>
            </Grid.Col>
            <Grid.Col span={{ base: 12 }}>
              <Text size="sm" c="gray">
                Your personal data will be used to process your order, support
                your experience through this website, and for other purposes
                descriped in our privacy policy.
              </Text>
            </Grid.Col>
          </Grid>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
          <CheckoutCartSectionOrganism />
        </Grid.Col>
      </Grid>
    </Flex>
  );
};

export default CheckoutOrganism;
