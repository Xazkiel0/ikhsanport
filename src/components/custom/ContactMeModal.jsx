"use client";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "../ui/animated-modal";
import Image from "next/image";
import { motion } from "framer-motion";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { IconBrandTelegram } from "@tabler/icons-react";
import { IconBrandGmail } from "@tabler/icons-react";
import Link from "next/link";
import { IconBrandMessenger } from "@tabler/icons-react";

export function ContactMeModal() {
  const contacts = [
    {
      name: "WhatsApp",
      icon: <IconBrandWhatsapp />,
      action: "https://wa.me/6283846246600",
    },
    {
      name: "Messengger",
      icon: <IconBrandMessenger />,
      action: "https://m.me/insanetation",
    },
    {
      name: "Telegram",
      icon: <IconBrandTelegram />,
      action: "https://t.me/insanetation",
    },
    {
      name: "Gmail",
      icon: <IconBrandGmail />,
      action: "mailto:sayidulikhsan2002@gmail.com",
    },
  ];
  return (
    <Modal>
      <ModalTrigger className="bg-primary flex items-center px-8 justify-center group/modal-btn">
        <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
          Contact Me
        </span>
        <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
          👋 Hi!
        </div>
      </ModalTrigger>
      <ModalBody className="bg-black-100">
        <ModalContent className="backdrop-blur-md z-50">
          <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
            Reach me out!
          </h4>
          <div className="py-10 flex flex-wrap gap-x-4 gap-y-6 items-start justify-start max-w-sm mx-auto">
            <div className="flex items-center justify-center">
              <div className="">
                <ul className={cn(" flex flex-col gap-3 w-max flex-nowrap")}>
                  {contacts.map((item, idx) => (
                    <Link key={idx} href={item.action} target="_blank">
                      <li className="px-4 py-2 text-sm w-full rounded-full border border-slate-500 text-slate-500 flex flex-row items-center gap-1 mx-auto">
                        <div className="">{item.icon}</div>
                        <span>{item.name}</span>
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </ModalContent>
      </ModalBody>
    </Modal>
  );
}
