import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Plus } from "lucide-react";
import { useState } from "react";

export function DialogSave() {
  const [folders, setFolders] = useState([
    "Meus favoritos",
    "Biologia",
    "Tecnologia",
  ]);
  const [isCreating, setIsCreating] = useState(false);
  const [newFolderName, setNewFolderName] = useState("");
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar a abertura do modal

  const { toast } = useToast();

  function handleAddFolder() {
    if (newFolderName.trim() === "") return;
    setFolders((prev) => [...prev, newFolderName]);
    toast({
      title: "Nova pasta criada",
      description: `A pasta "${newFolderName}" foi adicionada com sucesso.`,
    });
    setNewFolderName("");
    setIsCreating(false);
  }

  function handleSaveToFolder(folderName: string) {
    toast({
      title: "Salvo com sucesso",
      description: `O artigo foi salvo na pasta "${folderName}".`,
    });
    setIsOpen(false);
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon" className="border-0">
          <img src="/save.svg" alt="Ícone de salvar" />
        </Button>
      </DialogTrigger>
      <DialogContent className="">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold">
            {isCreating ? "Criar nova pasta" : "Salvar artigo em:"}
          </DialogTitle>
        </DialogHeader>

        {/* Tela de Criar Pasta */}
        {isCreating ? (
          <div className="space-y-4">
            <input
              type="text"
              value={newFolderName}
              onChange={(e) => setNewFolderName(e.target.value)}
              placeholder="Digite o nome da pasta..."
              className="w-full p-2 border focus:outline-none focus:ring-2 focus:ring-dark1"
            />
            <div className="flex justify-end space-x-2">
              <Button variant="ghost" onClick={() => setIsCreating(false)}>
                Cancelar
              </Button>
              <Button
                onClick={handleAddFolder}
                disabled={!newFolderName.trim()}
              >
                Criar
              </Button>
            </div>
          </div>
        ) : (
          // Tela de Lista de Pastas
          <div className="space-y-3">
            {folders.map((folder, index) => (
              <button
                key={index}
                onClick={() => handleSaveToFolder(folder)}
                className="flex items-center w-full p-2 space-x-2 text-left transition rounded-md hover:bg-gray-200"
              >
                <img
                  src="/folder.svg"
                  alt="Ícone de pasta"
                  className="w-6 h-6"
                />
                <span className="text-sm text-gray-800">{folder}</span>
              </button>
            ))}
            <div className="flex items-center space-x-2">
              <Plus className="w-6 h-6 text-blue2" />
              <button
                onClick={() => setIsCreating(true)}
                className="text-sm text-blue2 hover:underline"
              >
                Criar nova pasta
              </button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
