export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      card: {
        Row: {
          card_id: string;
          created_at: string;
          en_word: string;
          id: number;
          img: string;
          ru_word: string;
        };
        Insert: {
          card_id?: string;
          created_at?: string;
          en_word: string;
          id?: number;
          img: string;
          ru_word: string;
        };
        Update: {
          card_id?: string;
          created_at?: string;
          en_word?: string;
          id?: number;
          img?: string;
          ru_word?: string;
        };
        Relationships: [];
      };
      collection: {
        Row: {
          created_at: string;
          id: number;
          img: string;
          name: string | null;
        };
        Insert: {
          created_at?: string;
          id?: number;
          img?: string;
          name?: string | null;
        };
        Update: {
          created_at?: string;
          id?: number;
          img?: string;
          name?: string | null;
        };
        Relationships: [];
      };
      collections: {
        Row: {
          card_id: number;
          collection_id: number;
        };
        Insert: {
          card_id: number;
          collection_id: number;
        };
        Update: {
          card_id?: number;
          collection_id?: number;
        };
        Relationships: [
          {
            foreignKeyName: "public_collections_card_id_fkey";
            columns: ["card_id"];
            isOneToOne: false;
            referencedRelation: "card";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "public_collections_card_id_fkey";
            columns: ["card_id"];
            isOneToOne: false;
            referencedRelation: "random_card";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "public_collections_collection_id_fkey";
            columns: ["collection_id"];
            isOneToOne: false;
            referencedRelation: "collection";
            referencedColumns: ["id"];
          },
        ];
      };
    };
    Views: {
      random_card: {
        Row: {
          card_id: string | null;
          created_at: string | null;
          en_word: string | null;
          id: number | null;
          img: string;
          ru_word: string | null;
        };
        Insert: {
          card_id?: string | null;
          created_at?: string | null;
          en_word?: string | null;
          id?: number | null;
          img?: string;
          ru_word?: string | null;
        };
        Update: {
          card_id?: string | null;
          created_at?: string | null;
          en_word?: string | null;
          id?: number | null;
          img?: string | null;
          ru_word?: string | null;
        };
        Relationships: [];
      };
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type PublicSchema = Database[Extract<keyof Database, "public">];

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never;

// Schema: public
// Tables
export type Card = Database["public"]["Tables"]["card"]["Row"];
export type InsertCard = Database["public"]["Tables"]["card"]["Insert"];
export type UpdateCard = Database["public"]["Tables"]["card"]["Update"];

export type Collection = Database["public"]["Tables"]["collection"]["Row"];
export type InsertCollection =
  Database["public"]["Tables"]["collection"]["Insert"];
export type UpdateCollection =
  Database["public"]["Tables"]["collection"]["Update"];

export type Collections = Database["public"]["Tables"]["collections"]["Row"];
export type InsertCollections =
  Database["public"]["Tables"]["collections"]["Insert"];
export type UpdateCollections =
  Database["public"]["Tables"]["collections"]["Update"];

// Views
export type RandomCard = Database["public"]["Views"]["random_card"]["Row"];
