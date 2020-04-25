using Microsoft.EntityFrameworkCore.Migrations;

namespace HindiBackApp.Migrations
{
    public partial class thread : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Historiques",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TestRH = table.Column<string>(nullable: true),
                    TestTechnique = table.Column<string>(nullable: true),
                    TestPsycho = table.Column<string>(nullable: true),
                    CandidatureId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Historiques", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Historiques_Candidatures_CandidatureId",
                        column: x => x.CandidatureId,
                        principalTable: "Candidatures",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Historiques_CandidatureId",
                table: "Historiques",
                column: "CandidatureId",
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Historiques");
        }
    }
}
